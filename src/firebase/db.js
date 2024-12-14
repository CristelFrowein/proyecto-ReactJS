import { getFirestore, collection, getDocs, query, where, getDoc, addDoc, doc } from "firebase/firestore";
import { app } from './config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  


const db = getFirestore(app);


export const getProducts = async (setItems) => {
    const documents = await getDocs(collection(db, 'items'))
    const products = []

    documents.forEach((doc) => {
        products.push(doc.data())
    })

    setItems(products)
}

export const getFilterProducts = async (category, setItems) => {
    const q = query(collection(db, 'items'), where('category', '==', category))
    const products = []

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })

    setItems(products)
}


export const getDetail = async (id, setDetail) => {
     const docRef = doc(db, 'items', id); 
     const docSnap = await getDoc(docRef); 
     if (docSnap.exists()) {
         setDetail(docSnap.data()); 
        } 
        else { 
            console.log('No such document!') 
        }
    }

export const createOrder = async (order) => { 
    try { 
        const docRef = await addDoc(collection(db, "orders"), order); 
        console.log("Document written with ID: ", docRef.id); 
        toast.success(`Muchas gracias por tu compra, el ID de tu orden es: ${docRef.id}`);
    } 
    catch (e) { 
        console.error("Error adding document: ", e); 
    } 
}

