package com.thanneer.repository;

import org.springframework.stereotype.Repository;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.thanneer.constants.FirestoreCollections;
import com.thanneer.constants.ResponseMessage;
import com.thanneer.models.Inventory;

@Repository
public class InventoryRepository implements FirestoreCollections, ResponseMessage {

	public boolean createOrUpdateInventory(Inventory inventory) throws Exception {
		Firestore dbFirestore = FirestoreClient.getFirestore();
		dbFirestore.collection(INVENTORY).document(inventory.getUserEmail()).set(inventory);
		return true;
	}
}
