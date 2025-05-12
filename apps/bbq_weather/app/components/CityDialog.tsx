import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface CityDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (city: string) => void;
}

export default function CityDialog({ isOpen, onOpenChange, onSave }: CityDialogProps) {
  const [input, setInput] = useState('');

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter City</DialogTitle>
        </DialogHeader>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter city"
          className="w-full border rounded p-2 mb-4"
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="bg-gradient-to-b from-orange-500 to-red-600 text-white text-md px-4 py-2 rounded"
              onClick={() => onSave(input)}
            >
              Check City
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
