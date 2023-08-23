import { Firestore, collection, getDocs, addDoc} from "firebase/firestore/lite";

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