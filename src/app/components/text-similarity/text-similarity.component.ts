import {Component, OnInit} from '@angular/core';
import {TextSimilarityService} from "../../services/text-similarity.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  first: string = '';
  second: string = '';
  similarity: number = -1;

  constructor(private textSimilarityService: TextSimilarityService) {
  }

  ngOnInit(): void {
  }

  compare() {
    this.textSimilarityService.getTextSimilarity(this.first, this.second).subscribe((textSimilarity) => {
      this.similarity = textSimilarity.similarity;
    })
  }

  firstEmpty(): boolean {
    return this.first.length == 0;
  }

  secondEmpty(): boolean {
    return this.second.length == 0;
  }

}
