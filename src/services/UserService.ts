import { Firestore, collection, getDocs, doc, setDoc, addDoc, getDoc } from "firebase/firestore/lite";
import { v4 as uuidv4 } from 'uuid';

export default class UserService {
    constructor(private db: Firestore){

    }

    async getUsers(){
        return (await getDocs(this.getUsersCollection())).docs.map(doc => doc.data())
    }

    async saveUser(email: string){
        const user = await this.getUser(email)
        if(user) return user
        return addDoc(this.getUsersCollection(), { 
            email
        })
    }

    async getUser(email: string){
        return (await getDocs(this.getUsersCollection())).docs.find(v => v.data().email === email)
    }

    async listUsers(){
        return (await getDocs(this.getUsersCollection())).docs
    }

    getUsersCollection(){
        return collection(this.db,'users')
    }
}