import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Receitas } from '../model/receita.model';

@Injectable({
  providedIn: 'root'
})

export class ServicoService {

  itemCollection: AngularFirestoreCollection;

  constructor(private af: AngularFirestore) {
    this.itemCollection = af.collection('produtos');
  }

  consulta() {
    return this.itemCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    )
  }

  consultaOne(id: string) {
    return this.itemCollection.doc(id).valueChanges();
  }

  cadastro(dados: any) {
    return this.itemCollection.add(dados)
  }

  deletar(id: string) {
    return this.itemCollection.doc(id).delete()
  }

  editar(id: any, dados: Receitas) {
    return this.itemCollection.doc(id).update(dados)
  }
}
