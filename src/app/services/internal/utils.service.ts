import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NO_TOKEN_ENDPOINTS } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  static checkKey(objectToCheck, keyToCheck) {
    if (keyToCheck) {
      if (keyToCheck.type) {
        return Object.keys(objectToCheck).find((key) => key.toUpperCase() === keyToCheck.type.toUpperCase());
      } else {
        return Object.keys(objectToCheck).find((key) => key === keyToCheck);
      }
    }
    return null;
  }

  static doesEndpointNeedToken(searchedEndpoint: string): boolean {
    return !NO_TOKEN_ENDPOINTS.find((endpoint) => searchedEndpoint.includes(endpoint));
  }

  static encodeFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64 = reader?.result;

        if (base64) {
          resolve(base64.toString());
        } else {
          reject();
        }
      };
    });
  }

  static mustMatch(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      if (sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value) {
        return { mustMatch: true };
      }
      return null;
    };
  }

  static calculateDateDiff(date1: Date, date2: Date): number | null {
    if (!date1 || !date2) {
      return null;
    }

    return Math.floor(
      (Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) -
        Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  }

  static decodeBase64ToFile(fileName: string, base64: string, fileType: string): File {
    const imageBlob = UtilsService.dataURItoBlob(base64, fileType);
    return new File([imageBlob], fileName, { type: fileType });
  }

  static async toImageUrlToFile(imageUrl: string): Promise<File> {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return new File([blob], imageUrl, { type: blob.type });
  }

  static dataURItoBlob(dataURI, fileType) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: fileType });
    return blob;
  }

  static getStoredUserGroupId(): string | null {
    const userGroupId = this.getStoredObject('userGroups');
    return userGroupId ? userGroupId[0] : null;
  }

  static getStoredObject(key: string): Object | null {
    const itemString = localStorage.getItem(key);
    if (itemString) {
      return JSON.parse(itemString);
    }
    return null;
  }
}
