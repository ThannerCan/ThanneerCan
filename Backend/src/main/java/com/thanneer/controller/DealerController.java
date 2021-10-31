package com.thanneer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thanneer.models.Dealer;
import com.thanneer.service.DealerService;

@RestController
@RequestMapping("/customer")
public class DealerController {

	@Autowired
	private DealerService dealerService;
	
	@PostMapping("/createCustomer")
	public boolean createUser(@RequestBody Dealer dealer) {
		return dealerService.createDealer(dealer);
	}
}
