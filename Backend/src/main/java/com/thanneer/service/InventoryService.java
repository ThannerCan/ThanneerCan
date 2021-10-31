package com.thanneer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thanneer.constants.ResponseMessage;
import com.thanneer.models.Inventory;
import com.thanneer.repository.InventoryRepository;

@Service
public class InventoryService implements ResponseMessage {
	@Autowired
	private InventoryRepository inventoryRepository;

	public boolean createOrUpdateInventory(Inventory inventory) {
		try {
			return inventoryRepository.createOrUpdateInventory(inventory);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
}
