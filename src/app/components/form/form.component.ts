import { Component } from '@angular/core';
import { CaesarCipher } from '../../methods/CaesarCipher';
import { TextBinaryEncryption } from '../../methods/TextBinaryEncryption';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  inputText: string = '';
  outputText: string = '';
  shift: number = 0;
  isEncrypting: boolean = true;
  key: string = '';
  selectedMethod: string = 'Метод Цезаря';
  caesarCipher: CaesarCipher;
  textBinaryEncryption: TextBinaryEncryption;

  constructor() {
    this.updateCipher();
  }

  processText() {
    this.updateCipher();
    if (this.selectedMethod === 'Метод Цезаря') {
      if (this.isEncrypting) {
        this.outputText = this.caesarCipher.encrypt(this.inputText);
      } else {
        this.outputText = this.caesarCipher.decrypt(this.inputText);
      }
    } else if (this.selectedMethod === 'Метод Двоичное шифрование') {
      if (this.isEncrypting) {
        this.outputText = this.textBinaryEncryption.encrypt(this.inputText);
      } else {
        this.outputText = this.textBinaryEncryption.decrypt(this.inputText);
      }
    } else {
    }
  }

  updateCipher() {
    if (this.selectedMethod === 'Метод Цезаря') {
      this.caesarCipher = new CaesarCipher(this.shift);
    } else if (this.selectedMethod === 'Метод Двоичное шифрование') {
      this.textBinaryEncryption = new TextBinaryEncryption(this.key);
    } else {
    }
  }
}
