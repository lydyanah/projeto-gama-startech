import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { Button, Grid, Paper, Typography, Divider } from "@material-ui/core";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import brLocale from "date-fns/locale/pt-BR";
// import * as Yup from "yup";
import Page from "../../components/Page/Page";
import formStyles from "./formStyles";
import "./styles.css";

const Home = () => {
  const initialValues = {};

  const classes = formStyles();

  return (
    <>
      <Page>
        <section className="home">
          <section className="conteúdo">
            <Typography> Aqui vai um conteúdo</Typography>
          </section>

          <section className="formulário">
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  alert(JSON.stringify(values, null, 2));
                }, 500);
              }}
              // validationSchema={}
            >
              {({ submitForm, isSubmitting }) => (
                <Grid container spacing={3}>
                  <MuiPickersUtilsProvider
                    utils={DateFnsUtils}
                    locale={brLocale}
                  >
                    <Form className={classes.form}>
                      <Typography variant="h1" className={classes.h1}>
                        Dados Pessoais
                      </Typography>
                      <Paper className={classes.root} elevation={3}>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Nome Completo
                          </Typography>
                          <Field
                            className={classes.field}
                            name="nome"
                            component={TextField}
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Cargo Pretendido
                          </Typography>
                          <Field
                            className={classes.field}
                            name="cargo"
                            component={TextField}
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Data de Nascimento
                          </Typography>
                          <Field
                            className={classes.field}
                            component={KeyboardDatePicker}
                            name="dataNascimento"
                            format="dd/MM/yy"
                            disableFuture="true"
                            inputVariant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Estado Civil
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="estadoCivil"
                            variant="outlined"
                            size="small"
                            SelectProps={{
                              native: true,
                            }}
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Gênero
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="genero"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Endereço
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="endereço"
                            type="text"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs> 
                          <Typography variant="h2" className={classes.h2}>
                            Bairro
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="bairro"
                            type="text"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Cidade
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="cidade"
                            type="text"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            CEP
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="cep"
                            type="text"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Telefone Fixo 1
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="telefone"
                            type="text"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Telefone Fixo 2
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="telefone"
                            type="text"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Celular
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="celular"
                            type="text"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Contato
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="contato"
                            type="text"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            E-mail
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="email"
                            type="email"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>                       
                      </Paper>
                      <Divider className={classes.divider}/>
                      <Typography variant="h1" className={classes.h1}>
                        Documentos
                      </Typography>
                      <Paper className={classes.root} elevation={3}>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Identidade
                          </Typography>
                          <Field
                            className={classes.field}
                            name="identidade"
                            component={TextField}
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            CPF
                          </Typography>
                          <Field
                            className={classes.field}
                            name="cpf"
                            component={TextField}
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Possui veículo?
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="veiculo"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h2" className={classes.h2}>
                            Habilitação
                          </Typography>
                          <Field
                            className={classes.field}
                            component={TextField}
                            name="habilitação"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                      </Paper>
                      <Grid className={classes.submitButton}>
                        <Button
                          classes={{
                            root: classes.submitButton,
                            label: classes.label,
                          }}
                          color="primary"
                          disabled={isSubmitting}
                          disableElevation
                          onClick={submitForm}
                          variant="contained"
                        >
                          Enviar
                        </Button>
                      </Grid>
                      {isSubmitting}
                    </Form>
                  </MuiPickersUtilsProvider>
                </Grid>
              )}
            </Formik>
          </section>
        </section>
      </Page>
    </>
  );
};

export default Home;
