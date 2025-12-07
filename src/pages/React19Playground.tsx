import { useActionState, useOptimistic } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

// Simulation of a server action
async function updateName(currentState: string, formData: FormData): Promise<string> {
  const newName = formData.get("name") as string;
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  if (!newName) return currentState;
  return newName;
}

export default function React19Playground() {
  // useActionState (formerly useFormState) handles the pending state and result of an action
  const [name, submitAction, isPending] = useActionState(updateName, "Guest");

  // useOptimistic allows us to show the new value immediately while the server processes it
  const [optimisticName, setOptimisticName] = useOptimistic(
    name,
    (_state: string, newName: string) => newName
  );

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        React 19 Playground
      </Typography>
      
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            New Hooks: useActionState & useOptimistic
          </Typography>
          
          <Typography variant="body2" color="text.secondary" paragraph>
            Current Server State: <strong>{name}</strong><br />
            Current Optimistic State: <strong>{optimisticName}</strong>
            {isPending && <span style={{ marginLeft: 8 }}>(Sending to server...)</span>}
          </Typography>

          <form action={(formData) => {
            const newName = formData.get("name") as string;
            setOptimisticName(newName); // Update UI immediately
            submitAction(formData); // Send to server
          }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <TextField 
                size="small" 
                name="name" 
                label="Update Name" 
                disabled={isPending}
                autoComplete="off"
              />
              <Button 
                type="submit" 
                variant="contained" 
                disabled={isPending}
                startIcon={isPending ? <CircularProgress size={20} color="inherit" /> : null}
              >
                {isPending ? "Updating..." : "Update"}
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>

      <Typography variant="body1">
        Notes:
      </Typography>
      <ul>
        <li><strong>useActionState</strong>: Automatically manages the loading state (<code>isPending</code>) and the returned value from the async action.</li>
        <li><strong>useOptimistic</strong>: Allows showing the desired state immediately (like "Ben") even while the server request takes 1.5s to complete.</li>
      </ul>
    </Box>
  );
}
