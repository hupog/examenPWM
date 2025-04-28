import { Injectable } from '@angular/core';
import {
  Firestore, collection, addDoc, collectionData, deleteDoc,
  doc, updateDoc, docData,
} from '@angular/fire/firestore';
import { tasks } from '../../models/tasks.model';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class tasksService {
  private ref: any;
  constructor(private firestore: Firestore) {
    this.ref = collection(this.firestore, 'tasks');
  }
  getTasks(): Observable<tasks[]> {
    return collectionData(this.ref, { idField: 'id' }) as Observable<tasks[]>;
  }
  addTask(t: tasks) {
    return addDoc(this.ref, t);
  }
  deleteTask(id: string) {
    const docRef = doc(this.firestore, `tasks/${id}`);
    return deleteDoc(docRef);
  }
  updateTask(t: tasks) {
    const docRef = doc(this.firestore, `tasks/${t.id}`);
    return updateDoc(docRef, { ...t });
  }
  getTask(id: string): Observable<tasks> {
    const docRef = doc(this.firestore, `tasks/${id}`);
    return docData(docRef, { idField: 'id' }) as Observable<tasks>;
  }
}