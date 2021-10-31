package com.thanneer.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Inventory {

	private Integer paidWaterCans;
	private Integer requiredWaterCans;
	private Integer unpaidWaterCans;
	private Integer usedWaterCans;
	private Integer numberOfCansToNotify;
	private String userEmail;

}
