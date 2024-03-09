import { INewUser } from "@/types";
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { createUserAccount, signInAccount } from "../appwrite/api";
import { account, appwriteConfig, databases } from "../appwrite/config";
import { Query } from "appwrite";


export const useCreateUserAccount = () => {
     return useMutation({
          mutationFn: (user: INewUser) => createUserAccount(user)
     })
}
export const useSignInAccount = () => {
     return useMutation({
          mutationFn: (user: {email: string;
               password: string }) => signInAccount(user)
     })
}

export const getCurrentUser = async () => {
     try{
          const currentAccount = await account.get();

          if(!currentAccount) throw Error;

          const currentUser = await databases.listDocuments(appwriteConfig.databaseId, 
               appwriteConfig.userCollectionId, 
               [Query.equal('accountId', currentAccount.$id)]);
          if(!currentUser) throw Error;

          return currentUser.documents[0];
     }catch(err){
          console.log(err);
          
     }
}
