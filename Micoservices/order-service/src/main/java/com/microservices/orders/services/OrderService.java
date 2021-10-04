package com.microservices.orders.services;

import java.io.ByteArrayInputStream;import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.microservices.orders.dtos.ProductOrders;
import com.microservices.orders.dtos.ResponseDto;
import com.microservices.orders.entity.Product;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.microservices.orders.entity.Order;
import com.microservices.orders.repositories.OrderRepository;
import org.springframework.web.bind.annotation.ResponseStatus;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	public ResponseEntity save(Order order) throws JsonProcessingException {
		// TODO Auto-generated method stub

				order.setOrderId(UUID.randomUUID().toString());
		order.setDate(Date.from(Instant.now()));
		
		Order savedOrder = orderRepository.save(order);
		
		return null;

	}

    public List<Order> fetchAllOrders() {
		return  orderRepository.findAll();
    }

	public Order update(Order order) {
		Optional<Order> optionalOrder = Optional.ofNullable(orderRepository.findByOrderId(order.getOrderId()));
		if(optionalOrder.isPresent()){
			return  orderRepository.save(order);
		}else{
			return null;
		}

	}

	public ResponseDto delete(Order order) {
		Optional<Order> optionalOrder = Optional.ofNullable(orderRepository.findByOrderId(order.getOrderId()));
		if(optionalOrder.isPresent()){
			orderRepository.delete(order);
			return new  ResponseDto(true);
		}else{
			return new  ResponseDto(false);
		}

	}
}
