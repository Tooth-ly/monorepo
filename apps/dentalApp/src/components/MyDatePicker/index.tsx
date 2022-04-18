import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

interface MyDatePickerProps {
    date: Date
    setDate: (dat: Date) => void
    open: boolean
    setOpen: (flag: boolean) => void
}

const MyDatePicker = ({ date, setDate, open, setOpen }: MyDatePickerProps) => {


    return (
        <View>
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                }}
                onCancel={() => {
                setOpen(false)
                }}
            />
        </View>
    )
}

export default MyDatePicker