import { Component, OnInit } from '@angular/core';
import {LanguageDetectionService} from "../../services/language-detection.service";
import {Language} from "../../models/language-detection";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string = "";
  clean: boolean = false;

  detectedLanguages: Language[] = []

  constructor(private languageDetectionService: LanguageDetectionService) { }

  ngOnInit(): void {
  }

  isEmpty(): boolean {
    return this.text.length == 0;
  }

  detect() {
    this.languageDetectionService.getDetectedLanguage(this.text, this.clean).subscribe((ld) => {
      this.detectedLanguages = ld.detectedLangs;
    })
  }
}
