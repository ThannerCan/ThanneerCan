package com.thanneer.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

	
	private String userName;
	private String email;
	private String password;
	private String type;
	private Long contactNumber;
	private AddressInformation addressInformation;
	private String userId;
	private String dealerEmail;
}
