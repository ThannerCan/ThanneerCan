package com.thanneer.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddressInformation {
	private String doorNo;
	private String addressLine;
	private String city;
	private String state;
	private Integer pincode;

	@Override
	public String toString() {
		return "Door.No: " + doorNo + ", " + addressLine + ", " + city + ", " + state + " - " + pincode;
	}

}
