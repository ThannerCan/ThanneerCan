package com.thanneer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thanneer.constants.ApplicationConstants;
import com.thanneer.constants.ResponseMessage;
import com.thanneer.models.Dealer;
import com.thanneer.repository.DealerRepository;

@Service
public class DealerService implements ResponseMessage, ApplicationConstants{

	@Autowired
	private DealerRepository dealerRepository;

	public boolean createDealer(Dealer dealer) {
		try {
			return dealerRepository.createDealer(dealer);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
}
