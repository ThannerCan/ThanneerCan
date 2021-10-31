package com.thanneer.models;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WaterCanDealer {

	private String userName;
	private String email;
	private String password;
	private Long contactNumber;
	private AddressInformation addressInformation;
	private List<String> customerList;
	
}
