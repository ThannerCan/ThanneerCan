package com.thanneer.models;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WaterCanOrder {
	
	private String customerEmail;
	private String dealerEmail;
	private Integer totalNumberOfCans;
	private String orderStatus;
	private LocalDateTime orderInsertDate;
	private LocalDateTime orderCompletionDate;
	private String orderId;
	
}
