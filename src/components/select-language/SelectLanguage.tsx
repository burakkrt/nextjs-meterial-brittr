import * as React from 'react';
import { SimpleDialogProps, ICountry, IRootProps } from './types';
import { locales } from '@/i18n';
import countryFlags from './countryFlag.json';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const currentCountries = countryFlags.data.filter((country) =>
  locales.includes(country.code.toLocaleLowerCase('en'))
);

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, pathname, locale } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: ICountry) => {
    onClose(value);
  };

  const createLinks = () => {
    return currentCountries.map((country, index) => (
      <ListItem disableGutters key={index}>
        <Link
          locale={country.code.toLocaleLowerCase('en-US')}
          href={`${pathname.replace(locale, country.code.toLocaleLowerCase('en-US'))}`}>
          <ListItemButton sx={{ minWidth: 300 }} onClick={() => handleListItemClick(country)}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'transparent', color: 'none' }}>
                <Image src={country.image} alt="Country Image" fill />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={country.name} />
          </ListItemButton>
        </Link>
      </ListItem>
    ));
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>{createLinks()}</List>
    </Dialog>
  );
}

function SelectLanguage({ locale, pathname, color: textColor }: IRootProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<ICountry>(
    countryFlags.data.find((country) => country.code === locale.toLocaleUpperCase('en')) ||
      currentCountries[1]
  );
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: ICountry) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Button onClick={handleClickOpen} sx={{ color: 'white' }}>
        <ListItemAvatar sx={{ minWidth: '0', marginRight: '0.5rem' }}>
          <Avatar sx={{ bgcolor: 'transparent', color: 'none' }}>
            <Image src={selectedValue.image} alt="Country Image" fill />
          </Avatar>
        </ListItemAvatar>
        <Typography variant="button" sx={{ color: `${textColor}` }}>
          {selectedValue.name}
        </Typography>
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        pathname={pathname}
        locale={locale}
      />
    </>
  );
}

export default SelectLanguage;
