import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchContainer from './SearchContainer';
import AddFriends from './AddFriends'
import { useState, useEffect } from 'react'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '15%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function FriendSearch(){
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])
    
    
    const [searchAnchorEl, setSearchAnchorEl] =useState(null);

      function handleKeyDown(e){
        if (e.key === 'Enter') {
          setSearchAnchorEl(e.currentTarget)
        }
      }
    
      const handleClose = () => {
        setSearchAnchorEl(null);
      };

    useEffect(() => {
        fetch('/users')
        .then(res => res.json())
        .then(usersArr => {
            setUsers(usersArr)
        })
    },[])

    const searchedUsers = users.filter(user => user.username.toLowerCase().includes(search.toLowerCase()))
   

    return (
        <>
        <div >
            <Search value={search} onKeyDown={handleKeyDown}  variant='outlined' style={{color: '#F8E9FE', border: '1px solid #F8E9FE', position: 'absolute', bottom: '20px'}} onChange={(e) => setSearch(e.target.value)}>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
            style={{color: 'gray'}}
              placeholder="Find Friends..."
              inputProps={{ 'aria-label': 'search' }}
            />
            </Search>
            <SearchContainer searchAnchorEl={searchAnchorEl} setSearchAnchorEl={setSearchAnchorEl} handleClose={handleClose} searchedUsers={searchedUsers}/>
          </div>
          </>
    )
}

