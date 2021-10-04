package com.microservices.coupons.repository;

import com.microservices.coupons.model.Company;
import com.microservices.coupons.model.Coupon;
import com.microservices.coupons.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface CompaniesRepository extends MongoRepository<Company, String> {

	public Boolean existsByNameAndEmail(String name, String email);

    public Company findCompanyByEmailAndId(String email, String id);

    public Optional<Company> findById(String id);

    public Boolean existsByEmail(String email);

    public Company findByEmail(String email);

    public boolean existsById(String id);
}
  