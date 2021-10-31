package com.thanneer.config;

import java.io.IOException;

import javax.annotation.PostConstruct;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Configuration
public class FirebaseInitializer {

	@PostConstruct
	public void initialize() {
		
		 try {
	            FirebaseOptions options = new FirebaseOptions.Builder()
	                    .setCredentials(GoogleCredentials.fromStream(new ClassPathResource("/thanneer-can-firebase-adminsdk-gkrgv-1726075bb2.json").getInputStream()))
	                    .build();
	            if(FirebaseApp.getApps().isEmpty()) { //<--- check with this line
	                FirebaseApp.initializeApp(options);
	            }
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	}
}