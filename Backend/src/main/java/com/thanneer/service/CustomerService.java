package com.thanneer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thanneer.constants.ApplicationConstants;
import com.thanneer.constants.ResponseMessage;
import com.thanneer.models.Customer;
import com.thanneer.repository.CustomerRepository;

@Service
public class CustomerService implements ResponseMessage, ApplicationConstants{

	@Autowired
	private CustomerRepository userRepository;

	public boolean createCustomer(Customer customer) {
		try {
			return userRepository.createCustomer(customer);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
}
