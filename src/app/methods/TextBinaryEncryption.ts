export class TextBinaryEncryption {
  private readonly key: number[];

  constructor(key: string) {
    if (!key || key.length !== 16) {
      throw new Error('Ключ должен быть строкой из 16 символов.');
    }
    this.key = this.stringToByteArray(key);
  }

  encrypt(text: string): string {
    const textBytes = this.stringToByteArray(text);
    const binaryText = this.bytesToBinaryString(textBytes);
    return binaryText;
  }

  decrypt(binaryText: string): string {
    const textBytes = this.binaryStringToBytes(binaryText);
    const decryptedText = this.byteArrayToString(textBytes);
    return decryptedText;
  }

  private stringToByteArray(str: string): number[] {
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
      bytes.push(str.charCodeAt(i));
    }
    return bytes;
  }

  private byteArrayToString(bytes: number[]): string {
    let str = '';
    for (let i = 0; i < bytes.length; i++) {
      str += String.fromCharCode(bytes[i]);
    }
    return str;
  }

  private bytesToBinaryString(bytes: number[]): string {
    let binaryString = '';
    for (let i = 0; i < bytes.length; i++) {
      const binaryByte = bytes[i].toString(2).padStart(8, '0');
      binaryString += binaryByte;
    }
    return binaryString;
  }

  private binaryStringToBytes(binaryString: string): number[] {
    const bytes = [];
    for (let i = 0; i < binaryString.length; i += 8) {
      const byte = parseInt(binaryString.substr(i, 8), 2);
      bytes.push(byte);
    }
    return bytes;
  }
}
