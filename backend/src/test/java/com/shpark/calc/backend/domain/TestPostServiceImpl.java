package com.shpark.calc.backend.domain;

import com.shpark.calc.backend.dto.PostDTO;
import com.shpark.calc.backend.repository.PostRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@SpringBootTest
public class TestPostServiceImpl {

    @Autowired
    PostRepository postRepository;


    @Test
    public void register() {
        for (int i = 0; i < 10; i++) {
            PostDTO postDTO = PostDTO.builder()  // builder() 결과를 postDTO에 할당
                    .title("test" + i)
                    .localDateTime(LocalDateTime.now())
                    .build();

            Post post = new Post();

            post.setTitle(postDTO.getTitle());
            post.setLocalDateTime(postDTO.getLocalDateTime());

            postRepository.save(post);
        }

    }

    @Test
    public void get() {
        int pno = 15;

        Optional<Post> result = postRepository.findById(pno);
        Post post = result.orElseThrow();

        PostDTO postDTO = PostDTO.builder()
                .pno(post.getPno())
                .title(post.getTitle())
                .localDateTime(post.getLocalDateTime())
                .build();
        System.out.println(postDTO);

    }


}
