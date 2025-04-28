import { Injectable } from '@angular/core';
import {
  Firestore, collection, addDoc, collectionData, deleteDoc,
  doc, updateDoc, docData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { projects } from '../../models/projects.model';
@Injectable({ providedIn: 'root' })
export class projectsService {
  private ref: any;
  constructor(private firestore: Firestore) {
    this.ref = collection(this.firestore, 'projects');
  }
  getProjects(): Observable<projects[]> {
    return collectionData(this.ref, { idField: 'id' }) as Observable<projects[]>;
  }
  addProject(t: projects) {
    return addDoc(this.ref, t);
  }
  deleteProject(id: string) {
    const docRef = doc(this.firestore, `projects/${id}`);
    return deleteDoc(docRef);
  }
  updateProject(t: projects) {
    const docRef = doc(this.firestore, `projects/${t.id}`);
    return updateDoc(docRef, { ...t });
  }
  getProject(id: string): Observable<projects> {
    const docRef = doc(this.firestore, `projects/${id}`);
    return docData(docRef, { idField: 'id' }) as Observable<projects>;
  }
}