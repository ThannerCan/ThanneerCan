package com.thanneer.repository;

import org.springframework.stereotype.Repository;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.thanneer.constants.FirestoreCollections;
import com.thanneer.constants.ResponseMessage;
import com.thanneer.models.Dealer;

@Repository
public class DealerRepository implements FirestoreCollections, ResponseMessage {

	public boolean createDealer(Dealer dealer) throws Exception {
		Firestore dbFirestore = FirestoreClient.getFirestore();
		DocumentReference addedDocRef = dbFirestore.collection(DEALER).document();
		dealer.setDealerId(addedDocRef.getId());
		addedDocRef.set(dealer);
		return true;
	}
}
