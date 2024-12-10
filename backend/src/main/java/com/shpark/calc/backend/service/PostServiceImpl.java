package com.shpark.calc.backend.service;

import com.shpark.calc.backend.domain.Post;
import com.shpark.calc.backend.dto.PostDTO;
import com.shpark.calc.backend.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
@Transactional
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    @Override
    public PostDTO get(String id) {
        Optional<Post> result = postRepository.get(id);
        Post post = result.orElseThrow();

        PostDTO postDTO = PostDTO.builder()
                .pno(post.getPno())
                .title(post.getTitle())
                .content(post.getContent())
                .localDateTime(post.getLocalDateTime())
                .uuid(post.getUuid())
                .groupName(post.getGroupName())
                .build();

        return postDTO;
    }

    @Override
    public List<PostDTO> getAll(String groupName) {
        List<Post> posts = postRepository.getAll(groupName);
        log.info("Posts retrieved: " + posts.size());  // 반환된 엔티티 리스트 크기 확인
        if (posts.isEmpty()) {
            log.info("No posts found for groupName: " + groupName);  // 데이터가 없으면 로그 출력
        }

        // PostDTO로 변환
        List<PostDTO> postDTOList = posts.stream()
                .map(post -> PostDTO.builder()
                        .pno(post.getPno())
                        .title(post.getTitle())
                        .uuid(post.getUuid())
                        .content(post.getContent())
                        .groupName(post.getGroupName())
                        .build())
                .collect(Collectors.toList());

        return postDTOList;
    }


    @Override
    public int register(PostDTO postDTO) {
        Post post = Post.builder()
                .title(postDTO.getContent().substring(0, 8) + "...")
                .content(postDTO.getContent())
                .localDateTime(LocalDateTime.now())
                .uuid(postDTO.getUuid())
                .groupName(postDTO.getGroupName())
                .delFlag(false)
                .build();

        postRepository.save(post);
        return post.getPno();
    }

    @Override
    public void modify(PostDTO postDTO) {

    }

    @Override
    public void remove(String id) {
        PostDTO result = get(id);
        Post post = Post.builder()
                .pno(result.getPno())
                .title(result.getTitle())
                .content(result.getContent())
                .localDateTime(result.getLocalDateTime())
                .uuid(result.getUuid())
                .groupName(result.getGroupName())
                .delFlag(true)
                .build();

        postRepository.save(post);
    }
}
