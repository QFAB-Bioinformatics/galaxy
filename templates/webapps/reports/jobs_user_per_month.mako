<%inherit file="/base.mako"/>
<%namespace file="/message.mako" import="render_msg" />
<%namespace file="/sorting_base.mako" import="get_sort_url, get_css" />

<% from galaxy import util %>

%if message:
    ${render_msg( message, 'done' )}
%endif
    
${get_css()}

<%
   _email = util.restore_text( email )
%>
    
<!--jobs_user_per_month.mako-->
<div class="toolForm">
    <div class="toolFormBody">
        <h3 align="center">Jobs per month for user "${_email}"</h3>
        <h4 align="center">Click Total Jobs to see the user's jobs for that month</h4>
        <table align="center" width="60%" class="colored">
            %if len( jobs ) == 0:
                <tr><td colspan="2">There are no jobs for user "${ _email }"</td></tr>
            %else:
                <tr class="header">
                    <td>
                        ${get_sort_url(sort_id, order, 'date', 'user_per_month', 'Month', email=_email )}
                        <span class='dir_arrow date'>${arrow}</span>
                    </td>
                    <td>
                        ${get_sort_url(sort_id, order, 'total_jobs', 'user_per_month', 'Total Jobs', email=email)}
                        <span class='dir_arrow total_jobs'>${arrow}</span>
                    </td>
                </tr>
                <% ctr = 0 %>
                %for job in jobs:
                    %if ctr % 2 == 1:
                        <tr class="odd_row">
                    %else:
                        <tr class="tr">
                    %endif
                        <td>${job[2]}&nbsp;${job[3]}</td>
                        <td><a href="${h.url_for( controller='jobs', action='specified_date_handler', operation='user_for_month', email=email, specified_date=job[0] )}">${job[1]}</a></td>
                    </tr>
                    <% ctr += 1 %>
                %endfor
            %endif
        </table>
    </div>
</div>
<!--End jobs_user_per_month.mako-->
