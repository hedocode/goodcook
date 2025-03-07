import { Component } from '@angular/core';
import { ExternalLinkComponent } from '../external-link/external-link';

@Component({
  selector: 'docs',
  imports: [ExternalLinkComponent],
  templateUrl: './docs.html',
  styleUrl: './docs.scss',
})

export class DocsComponent {
}
