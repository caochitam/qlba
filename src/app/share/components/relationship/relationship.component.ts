import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Relationship } from '../../data/contact';
import { firestore } from 'firebase'
@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css']
})
export class RelationshipComponent implements OnInit {
  constructor() { }
  @Input() relationship: Array<Relationship>;
  @Output() relationshipChange = new EventEmitter<Array<Relationship>>();
  emit() {this.relationshipChange.emit(this.relationship)}
  ngOnInit() {}
}
