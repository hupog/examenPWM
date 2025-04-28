import { Injectable } from '@angular/core';
import {
  Firestore, collection, addDoc, collectionData, deleteDoc,
  doc, updateDoc, docData,
} from '@angular/fire/firestore';
import { employee } from '../../models/employee.model';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class employeeService {
  private ref: any;
  constructor(private firestore: Firestore) {
    this.ref = collection(this.firestore, 'employees');
  }
  getEmployees(): Observable<employee[]> {
    return collectionData(this.ref, { idField: 'id' }) as Observable<employee[]>;
  }
  addEmployee(t: employee) {
    return addDoc(this.ref, t);
  }
  deleteEmployee(id: string) {
    const docRef = doc(this.firestore, `employees/${id}`);
    return deleteDoc(docRef);
  }
  updateEmployee(t: employee) {
    const docRef = doc(this.firestore, `employees/${t.id}`);
    return updateDoc(docRef, { ...t });
  }
  getEmployee(id: string): Observable<employee> {
    const docRef = doc(this.firestore, `employees/${id}`);
    return docData(docRef, { idField: 'id' }) as Observable<employee>;
  }
}