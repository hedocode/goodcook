import { Component, Input } from '@angular/core';

@Component({
  selector: 'external-link',
  templateUrl: './external-link.html',
  styleUrl: './external-link.scss',
})

export class ExternalLinkComponent {
  @Input() el_title = "";
  @Input() el_link = "";
}
