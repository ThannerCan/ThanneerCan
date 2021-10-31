package com.thanneer.repository;

import org.springframework.stereotype.Repository;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.thanneer.constants.FirestoreCollections;
import com.thanneer.constants.ResponseMessage;
import com.thanneer.models.Customer;

@Repository
public class CustomerRepository implements FirestoreCollections, ResponseMessage {

	public boolean createCustomer(Customer user) throws Exception {
		Firestore dbFirestore = FirestoreClient.getFirestore();
		DocumentReference addedDocRef = dbFirestore.collection(USER).document();
		user.setUserId(addedDocRef.getId());
		addedDocRef.set(user);
		return true;
	}
}
