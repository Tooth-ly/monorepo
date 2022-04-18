import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Stage } from '../../Types'

interface TaskListTableHeaderProps {
  selectedStage: Stage,
  setSelectedStage: () => {},
  pickColor: () => Stage
}

const TaskListTableHeader = ({ selectedStage, setSelectedStage, pickColor }) => {

  const handlePressStage = (stage: Stage) => {
    setSelectedStage(stage)
  }

  return (
    <View style={[styles.root, { backgroundColor: pickColor()[0] }]}>
      {/* Stages */}
      <View style={styles.stage_names_container}>
            <Pressable
            style={[
              styles.stage_container,
              {borderColor: '#FF574A'}, 
              selectedStage==Stage.New && [styles.selected_stage_container, {backgroundColor: pickColor()[1]}]
            ]}
            onPress={() => handlePressStage(Stage.New)}>
              <Text style={styles.stage_name}>New</Text>
            </Pressable>

            <Pressable
            style={[
              styles.stage_container, 
              {borderColor: '#FDA424'}, 
              selectedStage==Stage.Pending && [styles.selected_stage_container, {backgroundColor: pickColor()[1]}]
            ]}
            onPress={() => handlePressStage(Stage.Pending)}>
              <Text style={styles.stage_name}>Pending</Text>
            </Pressable>

            <Pressable
            style={[
              styles.stage_container, 
              {borderColor: '#51CE72'}, 
              selectedStage==Stage.Done && [styles.selected_stage_container, {backgroundColor: pickColor()[1]}]
            ]}
            onPress={() => handlePressStage(Stage.Done)}>
              <Text style={styles.stage_name}>Done</Text>
            </Pressable>
      </View>

      <View style={{ height: 2, backgroundColor: pickColor()[1], marginVertical: 5 }}></View>

      {/* Tree Header */}
      <View style={styles.tree_header}>
        <View style={styles.tree_title_container}>
          <Text style={styles.tree_title_text}>Title</Text>
        </View>

        <View style={styles.tree_title_container}>
          <Text style={styles.tree_title_text}>Urgent</Text>
        </View>

        <View style={styles.tree_title_container}>
          <Text style={styles.tree_title_text}>Schedule</Text>
        </View>
      </View>

    </View>
  )
}

export default TaskListTableHeader