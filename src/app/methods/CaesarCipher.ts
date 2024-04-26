export class CaesarCipher {
  private shift: number;

  constructor(shift: number) {
    this.shift = shift;
  }

  encrypt(text: string): string {
    return this.transformText(text, this.shift);
  }

  decrypt(text: string): string {
    return this.transformText(text, -this.shift);
  }

  private transformText(text: string, shift: number): string {
    let transformedText = '';
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        transformedText += String.fromCharCode(
          ((charCode - 65 + shift) % 26) + 65
        );
      } else if (charCode >= 97 && charCode <= 122) {
        transformedText += String.fromCharCode(
          ((charCode - 97 + shift) % 26) + 97
        );
      } else {
        transformedText += text.charAt(i);
      }
    }
    return transformedText;
  }
}
