import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ChallengeService } from '../services/challenge.service';

@Component({
  selector: 'app-challengephases',
  templateUrl: './challengephases.component.html',
  styleUrls: ['./challengephases.component.scss']
})
export class ChallengephasesComponent implements OnInit {
  challenge: any;
  phases: any;
  constructor(private challengeService: ChallengeService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.challengeService.currentChallenge.subscribe(
    challenge => {
      this.challenge = challenge;
    });
    this.challengeService.currentPhases.subscribe(
    phases => {
      this.phases = phases;
    });
  }
}