package com.thanneer.models;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dealer {
	private String dealerName;
	private String dealerEmail;
	private String storeName;
	private String storeAddress;
	private List<String> customerEmails;
	private String dealerId;
}
