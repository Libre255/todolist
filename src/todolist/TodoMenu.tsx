import { Calendar, DateRangeType } from '@fluentui/react-calendar-compat';
import { Popover, PopoverTrigger, Button, PopoverSurface, Field, SearchBox, makeStyles } from '@fluentui/react-components';
import React, { useCallback, useState } from 'react';


const useStyles = makeStyles({
  menu: {
    display: "flex",
  }
})

type Props = {
  // Define your props here
  
};

const TodoMenu: React.FC<Props> = ({ }) => {
  const classes = useStyles();
  const [selectedDate, setselectedDate] = useState<Date>()
  const onSelectDate = useCallback((date:Date):void => {
    setselectedDate(date)
  }, [])


  return (
    <div className={classes.menu}>
      <Popover>
        <PopoverTrigger>
          <Button appearance="primary">Sort by date</Button>
        </PopoverTrigger>

        <PopoverSurface>
          <Calendar 
            dateRangeType={DateRangeType.Week}
            showMonthPickerAsOverlay
            highlightSelectedMonth
            showWeekNumbers={true}
            onSelectDate={onSelectDate}
            value={selectedDate}
          />
        </PopoverSurface>
      </Popover>
      
      <Field>
        <SearchBox placeholder="search todo" />
      </Field>
      <Button appearance="primary">Create</Button>
    </div>
  );
};

export default TodoMenu;