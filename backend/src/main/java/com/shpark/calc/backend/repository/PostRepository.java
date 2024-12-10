package com.shpark.calc.backend.repository;

import com.shpark.calc.backend.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

    @Query("SELECT p FROM Post p WHERE p.uuid = :id AND p.delFlag = false ")
    Optional<Post> get(@Param("id") String id);

    @Query("SELECT p FROM Post p WHERE p.groupName = :groupName AND p.delFlag = false")
    List<Post> getAll(@Param("groupName") String groupName);

}
