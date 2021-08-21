import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import brLocale from "date-fns/locale/pt-BR";
// import * as Yup from "yup";
import Page from "../../components/Page/Page";
import "./styles.css";
import formStyles from"./formStyles"

const Home = () => {

  const initialValues = {};

  const classes = formStyles();

  return (
    <>
      <Page>
        <div className="home">
          <section className="conteúdo">
            <h1> Aqui vai um conteúdo</h1>
          </section>

          <section className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
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
                  <Form className={classes.form}>
                    <h1>Dados Pessoais</h1>

                    <h2>Nome Completo</h2>
                    <Field
                      className= {classes.field}
                      name="nome"
                      component={TextField}
                      variant="outlined"
                    />

                    <h2>Cargo Pretendido</h2>
                    <Field
                      className= {classes.field}
                      name="cargo"
                      component={TextField}
                      variant="outlined"
                    />

                    <h2>Data de Nascimento</h2>
                    <Field
                      className= {classes.field}
                      component={KeyboardDatePicker}
                      name="dataNascimento"
                      format="dd/MM/yy"
                      disableFuture="true"
                      inputVariant="outlined"
                    />

                    <h2>Estado Civil</h2>
                    <Field
                      className= {classes.field}
                      component={Select}
                      name="estadoCivil"
                      variant="outlined"
                    />

                    <h2>Gênero</h2>
                    <Field
                      className= {classes.field}
                      component={Select}
                      name="genero"
                      variant="outlined"
                    />

                    <h2>Endereço</h2>
                    <Field
                      className= {classes.field}
                      component={TextField}
                      name="endereço"
                      type="text"
                      variant="outlined"
                    />

                    <h2>Bairro</h2>
                    <Field
                      className= {classes.field}
                      component={TextField}
                      name="bairro"
                      type="text"
                      variant="outlined"
                    />

                    <h2>Cidade</h2>
                    <Field
                      className= {classes.field}
                      component={TextField}
                      name="cidade"
                      type="text"
                      variant="outlined"
                    />

                    <h2>CEP</h2>
                    <Field
                      className= {classes.field}
                      component={TextField}
                      name="cep"
                      type="text"
                      variant="outlined"
                    />

                    <h2>Telefone Fixo 1</h2>
                    <Field
                      className= {classes.field}
                      component={TextField}
                      name="telefone"
                      type="text"
                      variant="outlined"
                    />

                    <h2>Telefone Fixo 2</h2>
                    <Field
                      className= {classes.field}
                      component={TextField}
                      name="telefone"
                      type="text"
                      variant="outlined"
                    />

                    <h2>Celular</h2>
                    <Field
                      className= {classes.field}
                      component={TextField}
                      name="celular"
                      type="text"
                      variant="outlined"
                    />

                    <h2>Contato</h2>
                    <Field
                      className= {classes.field}
                      component={TextField}
                      name="contato"
                      type="text"
                      variant="outlined"
                    />

                    <h2>E-mail</h2>
                    <Field
                      className= {classes.field}
                      component={TextField}
                      name="email"
                      type="email"
                      variant="outlined"
                    />

                    <h1>Documentos</h1>

                    <h2>Identidade</h2>
                    <Field
                      className= {classes.field}
                      name="identidade"
                      component={TextField}
                      variant="outlined"
                    />

                    <h2>CPF</h2>
                    <Field
                      className= {classes.field}
                      name="cpf"
                      component={TextField}
                      variant="outlined"
                    />

                    <h2>Gênero</h2>
                    <Field
                      className= {classes.field}
                      component={Select}
                      name="genero"
                      variant="outlined"
                    />

                    <h2>Possui veículo?</h2>
                    <Field
                      className= {classes.field}
                      component={Select}
                      name="veiculo"
                      variant="outlined"
                    />

                    <h2>Habilitação</h2>
                    <Field
                      className= {classes.field}
                      component={Select}
                      name="habilitação"
                      variant="outlined"
                    />

                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      disableElevation
                      onClick={submitForm}
                      variant="contained"
                    >
                      Enviar
                    </Button>
                    {isSubmitting}
                  </Form>
                )}
              </Formik>
            </MuiPickersUtilsProvider>
          </section>
        </div>
      </Page>
    </>
  );
};

export default Home;
