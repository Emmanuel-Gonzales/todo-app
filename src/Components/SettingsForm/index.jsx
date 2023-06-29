import { useContext, useState } from "react";
import { SettingsContext } from "../../Context/Settings";
import { createStyles, Grid, TextInput, Text, Switch, NumberInput, Button } from '@mantine/core';
import { IconSettings } from "@tabler/icons-react";
import { When } from "react-if"

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  }
}))

function SettingsForm() {
  const { classes } = useStyles();
  const [show, setShow] = useState(false);
  const {
    displayCount,
    showComplete,
    sort,
    setDisplayCount,
    setShowComplete,
    setSort,
    saveLocal,
  } = useContext(SettingsContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    saveLocal();
    setShow(true)
    e.target.reset();
  };
  console.log({ sort }, { showComplete }, { displayCount })
  return (
    <>
      <h1 className={classes.h1}><IconSettings />Manage Settings</h1>
      <Grid>
        <Grid.Col span={6}>
          <form onSubmit={handleSubmit}>
            <Text fontSize="xl" weight="bold">Update Settings</Text>
            <Switch
              checked={showComplete}
              onChange={(e) => setShowComplete(e.currentTarget.checked)}
              label="Show Completed Tasks"
            />
            <NumberInput
              value={displayCount}
              label="Items Per Page"
              onChange={setDisplayCount}
            />
            <TextInput
              placeholder={sort}
              label="sort Keyword"
              onChange={(e) => setSort(e.target.value)}
            />
            <Button type="submit">Show New Settings</Button>
          </form>
        </Grid.Col>
        <Grid.Col span={6}>
          <When condition={show}>
            <Text fontSize="xl" weight="bold">Updated Settings</Text>
            <Text>{showComplete ? 'Show' : 'Hide'} Completed Todos</Text>
            <Text>Items Per Page: {displayCount}</Text>
            <Text>Sort Keyword: {sort}</Text>
          </When>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default SettingsForm
