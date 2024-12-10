package com.shpark.calc.backend.service;

import com.shpark.calc.backend.domain.Group;
import com.shpark.calc.backend.dto.GroupDTO;
import com.shpark.calc.backend.repository.GroupRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
@Log4j2
@Transactional
public class GroupServiceImpl implements GroupService {

    private final GroupRepository groupRepository;

    @Override
    public int register(GroupDTO groupDTO) {
        Group group = Group.builder()
                .groupName(groupDTO.getGroupName())
                .build();
        groupRepository.save(group);
        return group.getGno();
    }

    @Override
    public GroupDTO get(int gno) {
        Optional<Group> result = groupRepository.findById(gno);
        Group group = result.orElseThrow();

        GroupDTO groupDTO = GroupDTO.builder()
                .gno(group.getGno())
                .groupName(group.getGroupName())
                .build();

        return groupDTO;
    }

    @Override
    public void remove(int pno) {
        groupRepository.deleteById(pno);
    }

    @Override
    public List<GroupDTO> getAll() {
        List<GroupDTO> result = groupRepository.findAll().stream()
                .map(grp -> {
                    GroupDTO groupDTO = new GroupDTO();
                    groupDTO.setGroupName(grp.getGroupName()); // 각 그룹에 대해 새로운 DTO 생성
                    groupDTO.setGno(grp.getGno());
                    return groupDTO; // 변환된 DTO를 반환
                })
                .collect(Collectors.toList()); // 결과를 리스트로 수집
        return result;
    }

}
