import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  WeekView,
  DayView,
  MonthView,
  Appointments,
  AppointmentTooltip
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Calendar(){
    const currentDate = '2018-11-01';
    const schedulerData = [
        { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Exit' },
        { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
        { startDate: '2018-11-02T13:00', endDate: '2018-11-02T13:30', title: 'Programming' },
    ];
    
    const [value, setValue] = useState('day');

    const handleChange = (event, value) => {
        setValue(value);
    };

    return(
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="day" label="Day" />
                <Tab value="week" label="Week" />
                <Tab value="month" label="Month" />
            </Tabs>

            {value === 'day' && <div>
                <Paper>
                    <Scheduler
                    data={schedulerData}
                    >
                    <DayView
                        startDayHour={8}
                        endDayHour={13}
                    />
                    <Appointments />
                    <AppointmentTooltip />
                    </Scheduler>
                </Paper>
            </div>}
            
            {value === 'week' && <div>
                <Paper>
                    <Scheduler data={schedulerData} height={600}>
                        <WeekView startDayHour={9} endDayHour={19} />
                        <Appointments />
                    </Scheduler>
                </Paper>
            </div>}

            {value === 'month' && <div>
                <Paper>
                    <Scheduler
                    data={schedulerData}
                    >
                    <ViewState
                        currentDate={currentDate}
                    />
                    <MonthView />
                    <Appointments />
                    </Scheduler>
                </Paper>
            </div>}

            
        </div>
    )
}