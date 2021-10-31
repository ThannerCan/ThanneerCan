package com.thanneer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thanneer.models.Customer;
import com.thanneer.service.CustomerService;

@RestController
@RequestMapping("/user")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/createUser")
	public boolean createUser(@RequestBody Customer user) {
		return customerService.createCustomer(user);
	}
}
