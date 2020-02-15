import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const TextField = styled(MuiTextField)`
&&& {
    display: block;
}
   
`;
const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function (props) {
    const classes = useStyles();
    const { data, submitForm } = props;
    const [formData, setFormData] = React.useState(data);

    React.useEffect(() => {
        setFormData(data)
    }, [data])
    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formData)
    }

    return (
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <TextField
                id="Name"
                label="Name"
                variant="outlined"
                color="primary"
                value={formData.fullName}
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        fullName: e.target.value
                    })
                }}
            />
            <TextField
                id="Email"
                label="Email"
                variant="outlined"
                color="primary"
                value={formData.email}
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        email: e.target.value
                    })
                }}
            />
            <TextField
                id="Phone"
                label="Phone"
                variant="outlined"
                color="primary"
                value={formData.phone}
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        phone: e.target.value
                    })
                }}
            />
            <TextField
                id="Company"
                label="Company"
                variant="outlined"
                color="primary"
                value={formData.company}
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        company: e.target.value
                    })
                }}
            />
            <TextField
                id="Address"
                label="Address"
                variant="outlined"
                color="primary"
                value={formData.address}
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        address: e.target.value
                    })
                }}
            />
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </form>
    );
}


