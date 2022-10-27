import {Component, OnInit} from '@angular/core';
import {SentimentAnalysisService} from "../../services/sentiment-analysis.service";
import {Color} from "../../models/color";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string = "";
  lang: string = "auto";

  score: number | undefined;
  type: string | undefined;

  Color: Color = {
    r: 0,
    g: 0,
    b: 0
  };
  Red: Color = {
    r: 255,
    g: 0,
    b: 0
  };
  Green: Color = {
    r: 0,
    g: 255,
    b: 0
  };

  constructor(private sentimentAnalysisService: SentimentAnalysisService) {
  }

  ngOnInit(): void {
  }

  analize() {
    this.sentimentAnalysisService.getSentimentAnalysis(this.text, this.lang).subscribe((analysis) => {
      this.score = analysis.sentiment.score;
      this.type = analysis.sentiment.type;

      let max = 1;
      let min = -1;
      
      let norm = (this.score - min) / (max - min);

      this.Color = {
        r: this.Red.r + (this.Green.r - this.Red.r) * norm,
        g: this.Red.g + (this.Green.g - this.Red.g) * norm,
        b: this.Red.b + (this.Green.b - this.Red.b) * norm
      }
    })
  }

  isEmpty(): boolean {
    return this.text.length == 0;
  }

  getColor(): string {
    return "rgb(" + this.Color.r + ", " + this.Color.g + ", " + this.Color.b + ")";
  }

}
